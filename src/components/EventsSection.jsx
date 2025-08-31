import React, { useEffect, useState } from "react";
import './EventsSection.css';

/* -------------------------
  1) Simulated fetch logic
   - Replace `fetchEventsMock` with real API call when ready
--------------------------*/
async function fetchEventsMock() {
  // simulate network delay
  await new Promise((r) => setTimeout(r, 700));

  // sample data returned by "API"
  return [
    {
      id: "e1",
      title: "Summer Fest – Cork",
      location: "Cork",
      status: "approved",      // approved | in-review | rejected | draft
      updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    },
    {
      id: "e2",
      title: "Food Market – Galway",
      location: "Galway",
      status: "in-review",
      updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    },
    {
      id: "e3",
      title: "Music Carnival – Dublin",
      location: "Dublin",
      status: "draft",
      updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    },
    {
      id: "e4",
      title: "Art Expo – Limerick",
      location: "Limerick",
      status: "rejected",
      updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    },
  ];
}

/* -------------------------
  small utility: human-friendly relative time
--------------------------*/
function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const sec = Math.floor(diffMs / 1000);
  if (sec < 60) return `${sec} sec${sec === 1 ? "" : "s"} ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min${min === 1 ? "" : "s"} ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hour${hr === 1 ? "" : "s"} ago`;
  const days = Math.floor(hr / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

/* -------------------------
  2) Data structure + component state
--------------------------*/
export default function EventsSection({
  onView = (id) => console.log("view", id),
  onContinue = (id) => console.log("continue", id)
}) {
  const [events, setEvents] = useState([]);       // holds fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchEventsMock()
      .then((data) => {
        if (!mounted) return;
        setEvents(data || []);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load events");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  /* small helper to pick button label and style from status */
  function actionForStatus(status) {
    switch (status) {
      case "approved":
        return { label: "View Details", variant: "primary" };
      case "in-review":
        return { label: "Continue", variant: "secondary" };
      case "draft":
        return { label: "Continue", variant: "secondary" };
      case "rejected":
        return { label: "See Reasons", variant: "secondary" };
      default:
        return { label: "View", variant: "secondary" };
    }
  }

  /* mapping for badge text & class */
  const badgeMap = {
    approved: { text: "✅ Approved", cls: "approved" },
    "in-review": { text: "🟡 In Review", cls: "in-review" },
    rejected: { text: "❌ Rejected", cls: "rejected" },
    draft: { text: "⚪ Draft", cls: "draft" },
  };

  /* -------------------------
    3) Return: dynamic render
  --------------------------*/
  return (
    <div className="events-section" aria-live="polite">
      <h2 className="section-title">Your Events & Applications</h2>

      <div className="events-container">
        {/* loading state */}
        {loading && (
          <div className="events-loading">
            <p>Loading events…</p>
            {/* lightweight skeleton rows */}
            <div className="event-row skeleton" />
            <div className="event-row skeleton" />
          </div>
        )}

        {/* error */}
        {!loading && error && (
          <div className="events-error">
            <p>Unable to load events: {error}</p>
          </div>
        )}

        {/* empty state */}
        {!loading && !error && events.length === 0 && (
          <div className="events-empty">
            <p>No events or applications found.</p>
            <button
              className="event-button primary"
              onClick={() => console.log("create new event")}
            >
              Create new event
            </button>
          </div>
        )}

        {/* list */}
        {!loading && !error && events.length > 0 && (
          <div className="events-list">
            {events.map((ev) => {
              const badge = badgeMap[ev.status] || { text: ev.status, cls: "" };
              const action = actionForStatus(ev.status);
              return (
                <div className="event-row" key={ev.id}>
                  <div className="event-info">
                    <p className="event-title">{ev.title}</p>
                    <span className={`event-badge ${badge.cls}`}>{badge.text}</span>
                    <p className="event-updated">Updated {timeAgo(ev.updatedAt)}</p>
                  </div>

                  <div className="event-action">
                    <button
                      className={`event-button ${action.variant}`}
                      onClick={() => {
                        if (ev.status === "approved") onView(ev.id);
                        else onContinue(ev.id);
                      }}
                      aria-label={`${action.label} for ${ev.title}`}
                    >
                      {action.label}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
