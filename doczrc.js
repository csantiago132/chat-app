module.exports = {
  title: 'Slack Chat',
  wrapper: '../../src/setup/docz_wrapper/wrapper',
  typescript: true,
  codeSandbox: false,
  themeConfig: {
    mode: 'dark',
    radii: '4px',
    styles: {
      container: {
        width: [1200, '100%'],
        padding: ['20px', '0 40px 40px'],
      }, 
    table: {
        overflowY: 'hidden',
        overflowX: ['initial', 'initial', 'initial', 'hidden'],
        display: ['block', 'block', 'block', 'table'],
        width: '100%',
        marginBottom: [20, 40],
        fontFamily: '"Source Code Pro", monospace',
        fontSize: 14,
      },
    }
  }
};