if (-1 || 0) alert('first'); // выполняется true||false
if (-1 && 0) alert('second'); // не выполняется false&&false
if (null || -1 && 1) alert('third'); // выполняется false|| (true&&true)