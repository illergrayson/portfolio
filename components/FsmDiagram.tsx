/* A finite-state model of controller↔drone (Fusion) connectivity, illustrating
   the UI-to-system desync pattern: the system enters DEGRADED while the UI
   still reads CONNECTED. Authored as SVG to demonstrate the systems modeling,
   not to reproduce any proprietary Skydio interface. */

type NodeProps = {
  x: number;
  y: number;
  label: string;
  accent?: boolean;
  muted?: boolean;
};

const W = 134;
const H = 46;

function Node({ x, y, label, accent, muted }: NodeProps) {
  return (
    <g>
      <rect
        x={x - W / 2}
        y={y - H / 2}
        width={W}
        height={H}
        rx={10}
        fill={accent ? "rgba(124,156,255,0.10)" : "rgba(255,255,255,0.025)"}
        stroke={
          accent
            ? "rgba(124,156,255,0.6)"
            : muted
            ? "rgba(255,255,255,0.14)"
            : "rgba(255,255,255,0.22)"
        }
        strokeWidth={accent ? 1.5 : 1}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.06em"
        fill={accent ? "#A9BBFF" : muted ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.85)"}
        fontFamily="var(--font-inter), sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function EdgeLabel({ x, y, text, accent }: { x: number; y: number; text: string; accent?: boolean }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize="9.5"
      fill={accent ? "#A9BBFF" : "rgba(255,255,255,0.42)"}
      fontFamily="var(--font-inter), sans-serif"
    >
      {text}
    </text>
  );
}

export default function FsmDiagram() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-ink-50 p-4 sm:p-6">
      <svg
        viewBox="0 0 780 300"
        className="h-auto w-full min-w-[660px]"
        role="img"
        aria-label="Finite state machine of Fusion controller-to-drone connectivity showing a UI/system desync between the Connected and Degraded states"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="rgba(255,255,255,0.4)" />
          </marker>
          <marker id="arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#7C9CFF" />
          </marker>
        </defs>

        {/* edges (drawn before nodes) */}
        {/* DISCONNECTED(90) -> PAIRING(270) */}
        <line x1="157" y1="62" x2="203" y2="62" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3" markerEnd="url(#arrow)" />
        <EdgeLabel x={180} y={52} text="power on" />

        {/* PAIRING(270) -> CONNECTED(470) */}
        <line x1="337" y1="62" x2="403" y2="62" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3" markerEnd="url(#arrow)" />
        <EdgeLabel x={370} y={52} text="link up" />

        {/* CONNECTED(470) -> DEGRADED(670) : the desync edge */}
        <line x1="537" y1="62" x2="603" y2="62" stroke="#7C9CFF" strokeWidth="1.7" markerEnd="url(#arrow-accent)" />
        <EdgeLabel x={570} y={52} text="signal loss" accent />

        {/* DEGRADED(670) -> RECONNECTING(380) */}
        <path d="M670,93 C670,150 560,150 446,188" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3" markerEnd="url(#arrow)" />
        <EdgeLabel x={612} y={150} text="auto-recover" />

        {/* RECONNECTING(380) -> CONNECTED(470) */}
        <path d="M400,188 C420,150 445,118 462,93" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3" markerEnd="url(#arrow)" />
        <EdgeLabel x={392} y={140} text="re-link" />

        {/* RECONNECTING(380) -> DISCONNECTED(90) */}
        <path d="M313,205 C200,225 110,170 90,93" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3" markerEnd="url(#arrow)" />
        <EdgeLabel x={195} y={224} text="timeout · disconnect" />

        {/* nodes */}
        <Node x={90} y={62} label="DISCONNECTED" muted />
        <Node x={270} y={62} label="PAIRING" />
        <Node x={470} y={62} label="CONNECTED" accent />
        <Node x={670} y={62} label="DEGRADED" />
        <Node x={380} y={205} label="RECONNECTING" />

        {/* desync callout */}
        <g>
          <rect x={508} y={232} width={244} height={52} rx={9} fill="rgba(124,156,255,0.07)" stroke="rgba(124,156,255,0.35)" strokeWidth="1" strokeDasharray="3 3" />
          <text x={630} y={250} textAnchor="middle" fontSize="9.5" letterSpacing="0.14em" fill="#A9BBFF" fontFamily="var(--font-inter), sans-serif">
            UI / SYSTEM DESYNC
          </text>
          <text x={630} y={266} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="var(--font-inter), sans-serif">
            system is DEGRADED, but the UI still
          </text>
          <text x={630} y={278} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="var(--font-inter), sans-serif">
            reads “Connected” to the operator
          </text>
        </g>

        {/* connector from desync callout to the edge */}
        <line x1="570" y1="70" x2="600" y2="232" stroke="rgba(124,156,255,0.25)" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    </div>
  );
}
