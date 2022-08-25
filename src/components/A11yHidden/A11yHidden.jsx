import './A11yHidden.css';

// presentational component
// functional component
// stateless component

// A11Y = Accessibility
// "접근성을 갖춘 감춤 처리" 컴포넌트

export const A11yHidden = ({
  as: ComponentName,
  className,
  focusable,
  ...restProps
}) => {
  // html standards element name 'span'
  // user defined component Span (PascalCase)

  return (
    <ComponentName
      className={`a11yHidden ${
        focusable ? 'focusable' : ''
      } ${className}`.trim()}
      {...restProps}
    />
  );
  // return React.createElement(as, null, children);
};

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
  focusable: false,
};
