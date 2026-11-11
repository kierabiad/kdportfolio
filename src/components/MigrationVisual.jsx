import Icon from '../Icon.jsx';

function FlowConnector() {
  return <div className="flow-connector" aria-hidden="true"><span /><Icon name="right" size={16} /></div>;
}

export default function MigrationVisual() {
  return (
    <div
      className="migration-visual"
      aria-label="Migration workflow: Slack conversation logs and attachments are transferred to Google Chat with data integrity checks. Conceptual workflow, not a product screenshot."
      role="img"
    >
      <div className="diagram-caption eyebrow"><span>Migration workflow</span><span>01 — 03</span></div>
      <div className="migration-flow">
        <div className="flow-node">
          <div className="flow-mark" aria-hidden="true">#</div>
          <span>Slack</span><small>Conversations + files</small>
        </div>
        <FlowConnector />
        <div className="flow-engine">
          <div className="flow-mark" aria-hidden="true"><Icon name="code" size={28} /></div>
          <span>Transfer</span><small>Validate · Migrate</small>
        </div>
        <FlowConnector />
        <div className="flow-node">
          <svg className="chat-mark" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M8 9h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H18l-7 6v-6H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z" />
          </svg>
          <span>Google Chat</span><small>History preserved</small>
        </div>
      </div>
      <div className="migration-result">
        <span><Icon name="check" size={16} />Data integrity verified</span><span>100%</span>
      </div>
      <span className="diagram-note">Conceptual workflow · not a product screenshot</span>
    </div>
  );
}
