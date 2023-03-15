import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

let arr = [1, 2, 3];
arr.map((item: any) => {
  console.log(item);
  return item;
});

export default Foo;
