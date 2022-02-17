import { styled, keyframes } from '@stitches/react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { grayDark } from '@radix-ui/colors'
import { ItemProps, ItemStat } from '../types/Item'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  paddingTop: 4,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '300ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: 'white',
});

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
export const HoverCardArrow = StyledArrow;

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
  return valueType === 'percentage'
    ? value + '%'
    : value
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
                  <Td>+{writeStatValue(stat.value, stat.numberType)}</Td>
                </tr>
              )
            })
          }
        
      </Table>
      <HoverCardArrow />
    </HoverCardContent>
  </HoverCard>
);
