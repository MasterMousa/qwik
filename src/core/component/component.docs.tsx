//
// This file stores example snippets which are found in the docs.
//
// Edit the snippet here and verify that it compiles, than paste
// it to the desired comment location
//

import { Fragment, h, component$, useStore, onRender$ } from '@builder.io/qwik';

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// DOCS: component$
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//
// <docs anchor="component$">
export const Counter = component$((props: { value?: number; step?: number }) => {
  const state = useStore({ count: props.value || 0 });
  return onRender$(() => (
    <div>
      <span>{state.count}</span>
      <button on$:click={() => (state.count += props.step || 1)}>+</button>
    </div>
  ));
});
// </docs>
//

//
// <docs anchor="component$-usage">
export const OtherComponent = component$(() => {
  return onRender$(() => <Counter value={100} />);
});
// </docs>
//

() => {
  //
  // <docs anchor="on-render">
  const Counter = component$((props: { name: string }) => {
    return onRender$(() => <div>{props.name}</div>);
  });
  // </docs>
  //
  return Counter;
};

() => {
  //
  // <docs anchor="on-mount">
  const Counter = component$(() => {
    const state = useStore({ count: 0 });
    return onRender$(() => <div>{state.count}</div>);
  });
  // </docs>
  //
  return Counter;
};

(other: [Record<string, any>]) => {
  //
  // <docs anchor="props">
  const MyComp = component$((props: { title: 'MyTitle'; label: 'defaultLabel' }) => {
    return onRender$(() => <span title={props.label}></span>);
  });
  // </docs>
  //
  return [MyComp, other];
};