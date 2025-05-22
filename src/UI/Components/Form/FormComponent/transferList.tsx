import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Sintomas = [
  "Dificultad para respirar",
  "Fiebre",
  "Dolor de pecho",
  "Dolor abdominal",
  "Mareo debilidad",
  "Nauseas o Vomito",
  "Perdida de Concienca",
  "Brote en la piel",
  "Accidente o Golpe"
];

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.includes(value));
}

type TransferListProps = {
  onChange: (rightValues: string[]) => void;
};

export default function TransferList({ onChange }: TransferListProps) {
  const [checked, setChecked] = React.useState<readonly string[]>([]);
  const [left, setLeft] = React.useState<readonly string[]>(Sintomas);
  const [right, setRight] = React.useState<readonly string[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  React.useEffect(() => {
    onChange([...right]);
  }, [right]);

  const handleToggle = (value: string) => () => {
    let newChecked: readonly string[] = [];

    // Solo permitimos uno seleccionado
    if (checked.includes(value)) {
      newChecked = [];
    } else {
      newChecked = [value];
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    if (leftChecked.length === 1) {
      setRight(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setChecked([]);
    }
  };

  const handleCheckedLeft = () => {
    if (rightChecked.length === 1) {
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      setChecked([]);
    }
  };

  const customList = (items: readonly string[], isLeft: boolean) => (
    <Paper
      sx={{
        width: 200,
        height: 230,
        overflow: 'auto',
        border: '3px solid #e53935', // borde rojo no muy grueso
        borderRadius: 1.5,
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.35)', 
      }}
    >
      <List dense component="div" role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-item-${value}-label`;

          const isDisabled = 
            (right.length >= 1 && isLeft) || //  no habilitamos la izquierda
            (checked.length > 0 && !checked.includes(value)); // solo se puede seleccionar uno

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={!isDisabled ? handleToggle(value) : undefined}
              disabled={isDisabled}
              sx={{
                borderRadius: 1,
                m: 0.5,
                opacity: isDisabled ? 0.5 : 1,
                border: '1px solid transparent', 
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: isDisabled ? 'transparent' : '#ffebee',
                  borderColor: isDisabled ? 'transparent' : '#e53935',
                  boxShadow: isDisabled ? 'none' : '0 0 5px 1px rgba(229, 57, 53, 0.3)',
                },
              }}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  disabled={isDisabled}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid>{customList(left, true)}</Grid>
      <Grid>
        <Grid container direction="column" sx={{ alignItems: 'center' }}>
          <Button
            sx={{
              my: 0.5,
              color: '#e53935',
              borderColor: '#e53935',
              minWidth: 40,
              '&:hover': {
                backgroundColor: '#fbe9e7',
                borderColor: '#b71c1c',
                color: '#b71c1c',
                boxShadow: '0 0 8px rgba(183, 28, 28, 0.6)',
              },
            }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length !== 1 || right.length >= 1}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{
              my: 0.5,
              color: '#e53935',
              borderColor: '#e53935',
              minWidth: 40,
              '&:hover': {
                backgroundColor: '#fbe9e7',
                borderColor: '#b71c1c',
                color: '#b71c1c',
                boxShadow: '0 0 8px rgba(183, 28, 28, 0.6)',
              },
            }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length !== 1}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid>{customList(right, false)}</Grid>
    </Grid>
  );
}
