import { grayDark } from "@radix-ui/colors"
import { styled } from "@stitches/react"

const Panel = styled('div', {
  backgroundColor: grayDark.gray4,
  width: 296,
  height: '100%'
})

export const LeftPanel = () => {
  return (
    <Panel/>
  )
}