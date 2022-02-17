import { styled } from '@stitches/react';
import { grayDark } from '@radix-ui/colors'

import { HoverCard, HoverCardContent, HoverCardTrigger} from './HoverCard'
import { ItemProps } from '../types/Item'

const Table = styled('table', {
  width: '100%',
  border: 'solid 1px lightgray',
  borderRadius: 6,
})
const Td = styled('td', {
  textAlign: 'center'
})
const ItemIcon = styled('img', {
  display: 'block',
  width: 56,
  height: 56,
})
const ItemDivTrigger = styled('div', {
  display: 'flex',
  backgroundColor: grayDark.gray4,
  alignItems: 'center',
  justifyContent: 'center',
  width: 64,
  height: 64,
  borderRadius: 4,
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: grayDark.gray7
  }
})

const writeStatValue = (value: number, valueType: string) => {
  switch (valueType) {
    case 'percentage':
      return value + '%'
    case 'meters':
      return value + 'm'
    default:
      return value
  }
}

export const Item = (props: ItemProps) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <ItemDivTrigger>
        <ItemIcon src={props.data.icon}/>
      </ItemDivTrigger>
    </HoverCardTrigger>
    <HoverCardContent sideOffset={5}>
      <h4>{props.data.name}</h4>
      <p>{props.data.description}</p>
      <Table>
          <tr>
            <th>Stat</th>
            <th>Stack</th>
            <th>Initial</th>
            <th>Bonus</th>
          </tr>
          {
            props.data.stats.map(stat => {
              return (
                <tr>
                  <Td>{stat.name}</Td>
                  <Td>{stat.stack}</Td>
                  <Td>{writeStatValue(stat.value, stat.numberType)}</Td>
                  <Td>+{writeStatValue(stat.add, stat.numberType)}</Td>
                </tr>
              )
            })
          }
        
      </Table>
    </HoverCardContent>
  </HoverCard>
);
