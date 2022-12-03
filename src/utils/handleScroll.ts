export default function utilHandleScroll(top: number, smooth = true) {
  if(smooth) {
    window.scroll({
      top: top,
      behavior: 'smooth'
    });
  } else {
    window.scroll(0, top);
  }
}
