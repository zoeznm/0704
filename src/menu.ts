const root = document.getElementById('root')!;

const anchorTags = (href:string, textNode:string):string => {
  let result = `<a href="${href}">${textNode}</a>`;
  return result;
}

const liTags = (children:string) => {
  let result = `<li>${children}</li>`;
  return result;
}

const totalElement = () => {
  let result = liTags(anchorTags("bomi", "보미"));
  return result;
}

root.innerHTML = `
<ul>
  ${totalElement()}
</ul>`;