import { withModifiers, defineComponent, ref } from "vue";

const ComponentJSX = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div>
        <p>JSX component</p>
        {count.value}
        <div onClick={withModifiers(inc, ["self"])}>+</div>
      </div>
    );
  },
});

export default ComponentJSX;
