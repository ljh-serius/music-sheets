import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const References = ({ elements = [] }) => {
    const router = useRouter();
    const { key, type, subType, quality, shape, mode } = router.query;

    const breadcrumb = [
        { label: 'Home', href: '/' },
        { label: 'References', href: '/references' },
        key && { label: key, href: `/references/${key}` },
        type && { label: type, href: `/references/${key}/${type}` },
        subType && { label: subType, href: `/references/${key}/${type}/${subType}` },
        quality && { label: quality, href: `/references/${key}/${type}/${subType}/${quality}` },
        shape && { label: shape, href: `/references/${key}/${type}/${subType}/${quality}/${shape}` },
        mode && { label: mode, href: `/references/${key}/${type}/${subType}/${quality}/${shape}/${mode}` },
    ].filter(Boolean);

    return (
        <div>
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
            <ul>
                {elements.map((element, index) => (
                    <li key={index}>
                        <Link href={element.href}>
                            {element.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default References;
