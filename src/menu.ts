const root = document.getElementById('root')!;

const anchorTags = (href:string, textNode:string):string => {
  let result = `<a href="${href}">${textNode}</a>`;
  return result;
}

interface BasicData  {
  bomi : "보미",
  jaemin : "재민",
  ujin : "유진",
  jiyoon: "지윤",
}


const basicData:BasicData = {
  bomi : "보미",
  jaemin : "재민",
  ujin : "유진",
  jiyoon: "지윤",
}

const liTags = (children:string) => {
  let result = `<li>${children}</li>`;
  return result;
}

const totalElement = (object:BasicData):string => {
  let result = liTags(anchorTags(`${object.bomi}`,object.bomi));
  return result;
}

root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>`;