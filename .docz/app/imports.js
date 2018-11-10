export const imports = {
  'src/components/CreateChatRoom/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-chat-room-docz" */ 'src/components/CreateChatRoom/docz.mdx'),
  'src/components/CreateMessage/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-message-docz" */ 'src/components/CreateMessage/docz.mdx'),
  'src/components/LoginComponent/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-login-component-docz" */ 'src/components/LoginComponent/docz.mdx'),
  'src/components/MessageList/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-message-list-docz" */ 'src/components/MessageList/docz.mdx'),
  'src/components/Navigation/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-navigation-docz" */ 'src/components/Navigation/docz.mdx'),
  'src/components/ProfileCard/docs.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-profile-card-docs" */ 'src/components/ProfileCard/docs.mdx'),
  'src/components/RoomsList/docz.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-rooms-list-docz" */ 'src/components/RoomsList/docz.mdx'),
}
