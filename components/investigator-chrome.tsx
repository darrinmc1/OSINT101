/**
 * Investigator HUD behind the home fold.
 * Static slate / indigo chrome — no grid, no scroll parallax, no float.
 */
export function InvestigatorChrome() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="investigator-wash" />
      <div className="investigator-corner investigator-corner-tl" />
      <div className="investigator-corner investigator-corner-tr" />
      <div className="investigator-corner investigator-corner-bl" />
      <div className="investigator-corner investigator-corner-br" />
    </div>
  )
}
