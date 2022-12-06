import { colors } from '@getlove/tokens';
import { getContrast } from 'polished';
import '../styles/colors-grid.css';

export const ColorsGrid = () =>
  Object.entries(colors).map(([key, color]) => (
    <div className='color-grid' key={key} style={{ backgroundColor: color }}>
      <p style={{ color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff' }}>
        <strong>${key}</strong>
        <span>{color}</span>
      </p>
    </div>
  ));
