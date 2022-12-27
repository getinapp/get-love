import '../styles/tokens-grid.css';

interface TokensGridPros {
  tokens: Record<string, string>;
  showPixelsValues?: boolean;
}

export const TokensGrid = ({ tokens, showPixelsValues }: TokensGridPros) => (
  <table className='tokens-grid'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Size</th>
        {showPixelsValues && <th>Pixels</th>}
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td className={key === 'highlight' ? 'highlight' : undefined}>
            {value}
          </td>
          {showPixelsValues && (
            <td>
              {value.includes('%') || value.includes('px')
                ? value
                : `${Number(value.replace('rem', '')) * 10}px`}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
