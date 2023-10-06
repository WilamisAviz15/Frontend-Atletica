export default function NgIf({ condition, children }: { condition: boolean; children: JSX.Element | JSX.Element[] }) {
  return condition ? <>{children}</> : null;
}
