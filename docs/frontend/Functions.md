# 常用工具函数

## 1.hook的加强版useState

```js
const useXState = (initState: any) => {
  const [state, setState] = useState(initState)
  let isUpdate = useRef<any>()
  const setXState = (state: any, cb: any) => {
    setState((prev: any) => {
      isUpdate.current = cb
      return typeof state === 'function' ? state(prev) : state
    })
  }
  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current()
    }
  },[state])

  return [state, setXState]
}

//使用案例
const [val, setVal] = useXState({})//详情信息
setVal((oldVal)=>{return newVal},()=>{})
```

## 2.根据在线文件地址，直接下载，不用预览

```js
const downLoadFn = (url: string, fileName: string) => {
  // showLoading()
  let newUrl = url
  //http 转成https
  if (!url.includes('https')) {
    newUrl = url.replace('http', 'https')
  }

  // console.log(newUrl)
  if (isImage(fileName)) {
    window.location.href = newUrl //图片的情况
    // hideLoading()
  } else {
    getBlob(newUrl).then(blob => {
      saveAs(blob, fileName);
    }).finally(() => {
      // hideLoading()

    });
  }



}
//判断是否是图片
function isImage(str: string) {
  var reg = /\.(png|jpg|gif|jpeg|webp)$/
  return reg.test(str)
}
const getBlob = (url: any) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.send();
  });
}

const saveAs = (blob: any, filename: any) => {
  if (window.navigator?.msSaveOrOpenBlob) {
    window.navigator?.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement('a');
    const body = document.querySelector('body');

    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // fix Firefox
    link.style.display = 'none';
    body?.appendChild(link);

    link.click();
    body?.removeChild(link);

    window.URL.revokeObjectURL(link.href);
  }
}
```

## 3.数字转大写  (222元=>贰佰贰拾贰元整)

```js
const numberToChinese = (n: number) => {
  var fraction = ['角', '分'];
  var digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');

}
```

## 4.判断是否是身份证号

```js
function isCardId(s: string) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|Xx)$)/.test(s)
}
```

## 5.文件流转文件

```js
 const download = (res, type, filename) => {
  // 创建blob对象，解析流数据
  const blob = new Blob([res], {
    // 设置返回的文件类型
    // type: 'application/pdf;charset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
    type: type
  })
  // 这里就是创建一个a标签，等下用来模拟点击事件
  const a = document.createElement('a')
  // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
  const URL = window.URL || window.webkitURL
  // 根据解析后的blob对象创建URL 对象
  const herf = URL.createObjectURL(blob)
  // 下载链接
  a.href = herf
  // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
  a.download = filename
  document.body.appendChild(a)
  // 点击a标签，进行下载 
  a.click()
  // 收尾工作，在内存中移除URL 对象
  document.body.removeChild(a)
  window.URL.revokeObjectURL(herf)
}

```

## 6.快速生成一定范围数组

```js
 const arrOk = (start:Number, end:Number) => {
   return [...Array(end - start+1)].map((item, index) => index + start)
 }
```

