import React from 'react';
import { Title, Section } from './AppContainer.styled';
import PropTypes from 'prop-types';

const AppContainer = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AppContainer;
