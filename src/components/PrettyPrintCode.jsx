export const PrettyPrintCode = (props) =>
  props.code ? <pre>{JSON.stringify(props.code, null, 2)}</pre> : null;
