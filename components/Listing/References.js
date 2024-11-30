import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../Partials/Head';
import ArticleCard from './ArticleCard';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReferencesHeader from '../AdSense/ReferencesHeader';
import ReferencesMiddle from '../AdSense/ReferencesMiddle';
import ReferencesBottom from '../AdSense/ReferencesBottom';

const content = `# Preface

Welcome to the **Comprehensive Reference Book for Guitar Music Sheets: Chords, Arpeggios, Modes, and Scales in All Keys and Shapes**. This book is designed to be an exhaustive resource for guitarists of all levels, offering a structured and systematic approach to mastering the intricacies of guitar music theory and technique.

## Purpose of This Book

The primary purpose of this book is to provide guitarists with a complete and organized collection of music sheets that encompass:

- **Chords**: Major, minor, augmented, diminished, suspended, and extended chords in all keys.
- **Arpeggios**: Essential arpeggio patterns for each chord type, facilitating melodic and harmonic playing.
- **Modes**: The seven modes derived from the major scale, along with modes derived from other scales such as harmonic minor and melodic minor.
- **Scales**: Major, minor (natural, harmonic, and melodic), pentatonic, blues, and exotic scales in all keys and positions.

Whether you are a beginner seeking to build a solid foundation or an advanced player aiming to refine your skills and expand your repertoire, this book serves as an invaluable tool to enhance your musical journey.

## How to Use This Book

### Organization

The book is structured into four main sections:

1. **Chords**: Detailed charts for all chord types across all keys, with multiple voicings and positions.
2. **Arpeggios**: Comprehensive arpeggio patterns corresponding to each chord, enabling fluid transitions and improvisation.
3. **Modes**: In-depth coverage of modes, including fingerings, applications, and contextual usage.
4. **Scales**: Extensive scale diagrams for a variety of scales, with emphasis on finger positioning and tonal characteristics.

Each section is meticulously organized to allow for easy reference and progressive learning.

### Practice Tips

To get the most out of this book, consider the following practice tips:

1. **Consistency**: Practice regularly. Dedicate a specific amount of time each day to work on different sections of the book. Consistency is key to building muscle memory and understanding.

2. **Slow and Steady**: Start slow. When learning new chords, arpeggios, modes, or scales, begin at a slow tempo. Focus on accuracy and clarity before increasing speed.

3. **Visualization**: Visualize the shapes and patterns on the fretboard. Familiarize yourself with how different chords, arpeggios, modes, and scales look and feel under your fingers.

4. **Application**: Apply what you learn. Incorporate new chords, arpeggios, modes, and scales into your playing. Use them in improvisation, composition, and while learning songs.

5. **Variation**: Practice in different keys and positions. This will help you become comfortable navigating the entire fretboard and understanding the relationships between different notes and shapes.

6. **Ear Training**: Develop your ear. Listen to how different chords, arpeggios, modes, and scales sound. Practice playing by ear and identifying the sounds you hear.

7. **Jam Sessions**: Play with others. Join jam sessions, bands, or ensembles. Playing with other musicians will challenge you and help you apply your knowledge in a musical context.

8. **Recording**: Record your practice sessions. Listening back to your recordings can provide insights into areas that need improvement and track your progress over time.

## Final Thoughts

Embarking on the journey to master guitar music theory and technique is a rewarding endeavor that offers endless possibilities for creativity and expression. This book is your companion on this journey, providing the resources and guidance you need to achieve your musical goals. Remember, progress takes time, patience, and dedication. Enjoy the process, celebrate your milestones, and keep pushing your boundaries.

Happy playing!`;

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '16px',
  width: '100%',
  margin: '0 auto', 
  padding: '20px',
  [theme.breakpoints.up('md')]: {
    maxWidth: '65%',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%',
  },
  '@media print': {
    margin: '0',
    width: '100%',
    maxWidth: '100%',
  },
}));

const References = ({ elements = [] }) => {
    const router = useRouter();
    const { key, type, subType, quality, shape, mode } = router.query;

    const breadcrumb = [
        { label: 'Play And Visualize', href: '/' },
        { label: 'Learn Songs', href: '/learn' },
        { label: 'The Circle Of Fifths', href: '/circle' },
        key && { label: key, href: `/references/${key}` },
        type && { label: type, href: `/references/${key}/${type}` },
        subType && { label: subType, href: `/references/${key}/${type}/${subType}` },
        quality && { label: quality, href: `/references/${key}/${type}/${subType}/${quality}` },
        shape && { label: shape, href: `/references/${key}/${type}/${subType}/${quality}/${shape}` },
        mode && { label: mode, href: `/references/${key}/${type}/${subType}/${quality}/${shape}/${mode}` },
    ].filter(Boolean);

    return (
        <div>
            <Meta 
                title="Musical Guitar Sheets Complete References (5000 pages for FREE / No Subscription / No Fees / No Payments)" 
                description="Explore my complete references for musical keys, scales, modes, and arpeggios. Find detailed information and resources for all keys, sharps, scales, modes, and arpeggios to enhance your musical knowledge."
            />
            <ReferencesHeader></ReferencesHeader>
            <ArticleCard article={{
                content: content
            }}></ArticleCard>
            <StyledCard>
                <Typography variant="h3">
                    Site Pages :
                </Typography>
                <CardContent>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {breadcrumb.map((crumb, index) => (
                                <li key={index} className="breadcrumb-item">
                                    <Link href={crumb.href}>
                                        {crumb.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </CardContent>
            </StyledCard>
            <StyledCard>
                <CardContent>
                    <ol>
                        {elements.map((element, index) => (
                            <li key={index}>
                                <Link href={element.href}>
                                    {element.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </CardContent>
            </StyledCard>
            <ReferencesBottom></ReferencesBottom>
        </div>
    );
};

export default References;
