// .storybook/YourTheme.js

import { create } from '@storybook/theming/create'
import logo from '../public/image/logo-ndt.svg'

export default create({
  base: 'dark',
  brandTitle: 'Design System da Novadata',
  // brandUrl: 'https://example.com',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: '"Inter", sans-serif',
  fontCode: '"Fira Code", sans-serif',
  colorPrimary: '#11d276',
  colorSecondary: '#444444',
  inputBorderRadius: 4,
})
