import * as React from 'react';
import type { NextPage } from 'next';
import { PageTransition, ProjectPage } from '@components';
import { colors } from '@constants';

const GoldfishPage: NextPage = () => {
    return (
        <PageTransition>
            <ProjectPage
                title="Sorting Visualizer"
                video="sorting.mp4"
                colorScheme={colors.sorting}
                technologies={[
                    'react.svg',
                    'typescript.svg',
                    'rust.svg',
                    'wasm.svg',
                    'nx.svg',
                    'stitches.svg',
                    'netlify.svg',
                ]}
            >
                <p>
                    Sorting visualizer made in React, Rust and WASM. Steps
                    required to sort the array are calculated in WASM and then
                    animated on the frontend.
                    <br /> The user can change the length of the array, delay
                    between operations, and select one of six sorting
                    algorithms.
                    <br />
                    The webiste is styled using Stitches, and uses RadixUI for
                    slider, select and label components
                    <br />
                    <br />
                    Available algorithms:
                    <ul>
                        <li>Bubble Sort</li>
                        <li>Quick Sort</li>
                        <li>Insertion Sort</li>
                        <li>Selection Sort</li>
                        <li>Heap Sort</li>
                        <li>Gnome Sort</li>
                    </ul>
                </p>
            </ProjectPage>
        </PageTransition>
    );
};

export default GoldfishPage;
