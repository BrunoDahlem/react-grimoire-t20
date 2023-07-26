import { Heading } from '../Heading';
import { Text } from '../Text';
import * as Styled from './styles';

export type Extra = {
  name?: string;
  description?: string;
  require?: string;
};

export type ImprovementsMagic = {
  cost: string;
  description: string;
  require: string;
};

export type HeaderMagic = {
  name: string;
  value: string;
};

export type MagicProps = {
  id: number;
  name: string;
  type: string;
  school: string;
  circle: number;
  header: HeaderMagic[];
  description: string;
  improvements?: ImprovementsMagic[];
  extra?: Extra[];
};

export const Magic = ({
  name,
  type,
  school,
  circle,
  header,
  description,
  improvements,
  extra,
}: MagicProps) => {
  return (
    <Styled.Container>
      <Heading size="medium" as="h2" uppercase={true}>
        {name}
      </Heading>
      <Heading size="small" as="h3" uppercase={true}>
        {`${type} ${circle} (${school})`}
      </Heading>
      <Styled.HeaderUl>
        {header &&
          header.map((h, i) => {
            const { name, value } = h;
            if (value) {
              return (
                <Styled.Li key={i}>
                  <Text size="small">
                    <Styled.Span>{name}: </Styled.Span>
                    {value};
                  </Text>
                </Styled.Li>
              );
            }
          })}
      </Styled.HeaderUl>
      <Text size="small">{description}.</Text>
      {extra && extra.length > 0 && (
        <Styled.ImprovementsUl>
          {extra.map((info, i) => {
            return (
              <Styled.Li key={i}>
                <Text size="small">
                  <Styled.Span>{info.name}: </Styled.Span>
                  {info.description}. {info.require}
                </Text>
              </Styled.Li>
            );
          })}
        </Styled.ImprovementsUl>
      )}
      <Styled.ImprovementsUl>
        {improvements &&
          improvements.map((improvement, i) => {
            const { cost, description, require } = improvement;
            return (
              <Styled.Li key={i}>
                <Text size="small">
                  {cost && cost.toLowerCase() != 'truque' && (
                    <Styled.Span>+{cost} PM: </Styled.Span>
                  )}
                  {cost && cost.toLowerCase() == 'truque' && (
                    <Styled.Span>{cost}: </Styled.Span>
                  )}
                  {description}
                  {require && (
                    <Styled.RequireSpan> {require}</Styled.RequireSpan>
                  )}
                </Text>
              </Styled.Li>
            );
          })}
      </Styled.ImprovementsUl>
    </Styled.Container>
  );
};
