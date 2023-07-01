//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args));
    let objectInCache = cache.find(item => item.hash === hash);
  
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
  
    let result = func(...args);
    cache.push({ hash: hash, value: result });
  
    if (cache.length > 5) {
      cache.shift();
    }
  
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  
    return wrapper;
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let count = 0;
  let allCount = 0;
  
  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      allCount++;
    }
  
    if (!timeoutId) {
      count++;
      wrapper.count = count;
      func.apply(this, args);
    }

    timeoutId = setTimeout(() => {
      count++;
      wrapper.count = count;
      func.apply(this, args);
    }, delay);

    wrapper.allCount = allCount;
  }
  
  wrapper.count = count;
  wrapper.allCount = allCount++;

  return wrapper;
}