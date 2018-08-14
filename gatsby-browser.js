import picturefill from 'picturefill';

export function onClientEntry() {
  picturefill();
}

export function onRouteUpdate() {
  window.scrollTo(0, 0); // When moving to another page it will always go top
  picturefill();
  console.log('ReactDOM.render has executed');
  if (process.env.GATSBY_ENV !== 'production') {
    let ev = document.createElement('script');
    ev.type = 'text/javascript';
    ev.async = true;
    ev.setAttribute('data-ev-tag-pid', 8873);
    ev.setAttribute('data-ev-tag-ocid', 2014);
    ev.src =
      ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'c.someurl.com/doe/tag.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ev, s);
  }
}

const windowWidth = window.innerWidth;

export function shouldUpdateScroll(args) {
  return args.prevRouterProps == null || windowWidth < 750 ? true : false;
}