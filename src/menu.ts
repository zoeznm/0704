const root = document.getElementById('root')!;

const anchorTags = (href:string, textNode:string):string => {
  let result = `<a href="#${href}">${textNode}</a>`;
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
  let result = '';
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(anchorTags(key, value));
  }
  return result;
}

root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
<main id="main-target></main>`;

//------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

const mainTarget =document.getElementById('main-target')!;