import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '16px',
  [theme.breakpoints.up('md')]: {
    maxWidth: '65%',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%',
  },
}));

const headingStyles = {
  h1: { fontSize: '52px' },
  h2: { fontSize: '42px' },
  h3: { fontSize: '36px' },
  h4: { fontSize: '30px' },
  h5: { fontSize: '24px' },
  h6: { fontSize: '20px' },
};

const ArticleCard = ({ article }) => {
  const { content } = article;

  const formattedContent = content.split('\n').map((line, index) => {
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)[0].length; // Get the number of leading #
      const text = line.replace(/^#+\s*/, ''); // Remove the leading # and any space
      const headingLevel = `h${level}`;

      return (
        <Typography
          key={index}
          component={headingLevel}
          style={{ ...headingStyles[headingLevel], marginTop: '16px' }}
        >
          {text}
        </Typography>
      );
    }

    const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return (
      <Typography
        key={index}
        variant="body2"
        color="textSecondary"
        component="p"
        dangerouslySetInnerHTML={{ __html: boldText }}
      ></Typography>
    );
  });

  return (
    <StyledCard>
      <CardContent>
        {formattedContent}
      </CardContent>
    </StyledCard>
  );
};

export default ArticleCard;
