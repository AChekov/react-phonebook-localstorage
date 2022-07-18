import React from 'react';
import { Title, Section } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
