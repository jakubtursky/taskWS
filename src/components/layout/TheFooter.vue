<template lang="pug">
  footer.footer
    .footer-top.margin-bottom-3
      .container-large
        .row.txt-c
          .col-12.txt-c
            BaseMenuList(listClass="menu-list-xs-full" listLinkClass="menu-list-link-white menu-list-link-small")
    .footer-bottom
      .container-large
        .row
          .col-12.txt-c
            .footer-author Created by
              a(href="https://jakubtursky.sk", target="_blank").a-hover-link-underline-block.footer-link
                span.a-hover-link-underline Jakub Turský
                span(class="d-flex align-items-center ico-size-36 ico-color-white margin-left-05")
                  BaseSvgIcon(name="jakub-tursky-logo")
</template>

<script></script>

<style scoped lang="scss">
.footer {
  position: relative;
  padding: 3rem 0 1.2rem;
  background-color: $ws-dark-blue;

  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.footer-author {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $ws-white;
  line-height: 1.6;
  @include font-size(14px);
}

.footer-link {
  display: flex;
  align-items: center;
  color: $ws-white;
  margin-left: 0.3rem;
  &:hover {
    svg {
      fill: $ws-primary;
    }
  }
}

.footer-author-logo {
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
}
</style>
