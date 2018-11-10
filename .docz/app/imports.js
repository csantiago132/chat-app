export const imports = {
  'src/components/CreateChatRoom/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-chat-room-docz" */ 'src/components/CreateChatRoom/docz.mdx'),
  'src/components/CreateMessage/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-message-docz" */ 'src/components/CreateMessage/docz.mdx'),
  'src/components/LoginComponent/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-login-component-docz" */ 'src/components/LoginComponent/docz.mdx'),
  'src/components/MessageList/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-message-list-docz" */ 'src/components/MessageList/docz.mdx'),
}
