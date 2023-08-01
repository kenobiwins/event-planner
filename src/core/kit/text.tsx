import styled from 'styled-components'

const TitleH2 = styled.h2(({ theme }) => ({
  fontFamily: theme.font.mainTypography,
  fontWeight: 600,
  fontSize: theme.px.x8 + 'px',
  lineHeight: theme.px.x12 + 'px',
  color: theme.color.text,
}))

const Title = styled.p(({ theme }) => ({
  fontFamily: theme.font.mainTypography,
  fontWeight: 500,
  fontSize: theme.px.x4 + 'px',
  lineHeight: theme.px.x6 + 'px',
  color: theme.color.mainText,
}))

const Body = styled.p<{ color: string }>(({ theme, color }) => ({
  fontFamily: theme.font.mainTypography,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  color: color ? color : theme.color.black,
}))

const Caption = styled.p<{ color: string }>(({ theme, color }) => ({
  fontFamily: theme.font.mainTypography,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '21px',
  color: color ? color : theme.color.black,
}))

export { TitleH2, Title, Body, Caption }
