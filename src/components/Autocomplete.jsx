// src/components/Autocomplete.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Minimal reusable Autocomplete
 * Props:
 * - items: array of items
 * - getLabel: item => string
 * - onSelect: item => void
 * - placeholder: string
 * - initialQuery: optional string
 * - maxResults: optional number
 */
export default function Autocomplete({
  items = [],
  getLabel = (i) => (i ? String(i) : ""),
  onSelect = () => {},
  placeholder = "Search...",
  initialQuery = "",
  maxResults = 8,
}) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef(null);

  // filter once per query
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? items.filter((it) => getLabel(it).toLowerCase().includes(normalized))
    : items.slice(0, maxResults);

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => setHighlight(0), [filtered.length]);

  function handleKey(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (open && filtered[highlight]) {
        e.preventDefault();
        selectItem(filtered[highlight]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function selectItem(item) {
    onSelect(item);
    setQuery(getLabel(item));
    setOpen(false);
  }

  return (
    <div className="autocomplete" ref={rootRef} style={{ position: "relative" }}>
      <input
        className="autocomplete-input"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKey}
        aria-autocomplete="list"
        aria-expanded={open}
        role="combobox"
        style={{ width: "100%", boxSizing: "border-box" ,border: "1px solid #d0d0d0",
            background: "#fff",
            marginTop: 0,
            borderRadius: 10,
            
            fontSize:" 0.95rem", padding: "11px 8px"}}
      />

      {open && filtered.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 60,
            left: 0,
            right: 0,
            maxHeight: 420,
            overflowY: "auto",
            padding: "10px 12px",
            border: "1px solid #d0d0d0",
            background: "#fff",
            marginTop: 10,
            borderRadius: 16,
            borderRadius: "10px",
            fontSize:" 0.95rem",
            listStyle: "none",
          }}
        >
          {filtered.slice(0, maxResults).map((item, idx) => {
            const label = getLabel(item);
            const isHighlighted = idx === highlight;
            return (
              <li
                key={label + idx}
                role="option"
                aria-selected={isHighlighted}
                onMouseEnter={() => setHighlight(idx)}
                onMouseDown={(e) => {
                  e.preventDefault(); // avoid blur interfering with click
                  selectItem(item);
                }}
                style={{
                  padding: "8px 10px",
                  cursor: "pointer",
                  background: isHighlighted ? "#f3f6fb" : "transparent",
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
