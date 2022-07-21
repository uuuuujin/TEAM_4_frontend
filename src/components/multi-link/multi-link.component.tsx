import { LinkContainer, CopyBtn, LinkAddressContainer, LinkAddress } from './multi-link.style';

interface LinkType {
  children: string;
  setToastState: (value: boolean) => void;
}
export default function MultiLink({ children, setToastState }: LinkType): JSX.Element {
  const handlerCopy = () => {
    setToastState(true);
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <LinkContainer>
      <LinkAddressContainer>
        <LinkAddress>{children.slice(0, 40)}...</LinkAddress>
      </LinkAddressContainer>

      <CopyBtn onClick={handlerCopy}>복사</CopyBtn>
    </LinkContainer>
  );
}
