    // layoutConfig.js
    import React from 'react';
    import Card from '../components/card/Card';
    import ExperienceCard from "../content/experience/Experience";
    import EducationCard from '../content/education/Education';
    import AnalogClock from '../content/time/analog/AnalogClock';
    import ProjectCard from '../content/projects/Projects';
    import StatusCard from '../content/status/Status';
    import PortfolioCard from '../content/portfolio/Portfolio';
    import ContactCard from '../content/contact/Contact';

    // Define the possible sizes for each card type
    const cardTypes = {
        'EXPERIENCE': [{ columns: 2, rows: 3 }, { columns: 2, rows: 2 }], // Now an array of sizes
        'TIMEZONE': [{ columns: 1, rows: 1 }],
        'CONNECT': [{ columns: 1, rows: 1 }],
        'PROJECTS': [{ columns: 2, rows: 2 }, { columns: 2, rows: 3 }],
        'MY WORK(S)': [{ columns: 2, rows: 2 }, { columns: 2, rows: 1 }],
        'EDUCATION': [{ columns: 2, rows: 2 }, { columns: 2, rows: 1 }],
        'RECOMMENDATIONS': [{ columns: 2, rows: 1 }],
        'STATUS': [{ columns: 2, rows: 1 }, { columns: 1, rows: 1 }],
    };

    const gridColumns = 6;
    const gridRows = 4;

    // Function to generate a random layout
    // Function to generate a random layout
    const generateRandomLayout = () => {
        const cardTypeKeys = Object.keys(cardTypes);
        let layout, grid, attempt, allCardTypesUsed;
    
        do {
            layout = [];
            grid = Array(gridRows).fill().map(() => Array(gridColumns).fill(false));
            attempt = true;
            allCardTypesUsed = true;
    
            for (let row = 1; row <= gridRows && attempt; row++) {
                for (let col = 1; col <= gridColumns && attempt; col++) {
                    if (!grid[row - 1][col - 1]) {
                        const availableOptions = getAvailableCardTypesAndSizes(cardTypeKeys, layout, row, col, grid);
                        if (availableOptions.length === 0) {
                            attempt = false;
                            allCardTypesUsed = false;
                        } else {
                            const { cardType, size } = selectRandomElement(availableOptions);
                            const position = { columnStart: col, rowStart: row };
    
                            layout.push({ cardType, size, position });
                            updateGrid(grid, position, size);
                        }
                    }
                }
            }
    
            // Check if all card types have been used
            if (allCardTypesUsed) {
                const usedCardTypes = layout.map(item => item.cardType);
                allCardTypesUsed = cardTypeKeys.every(cardType => usedCardTypes.includes(cardType));
            }
        } while (!allCardTypesUsed);
    
        return layout;
    };
    

    // Function to get available card types that can fit in the current position
    const getAvailableCardTypesAndSizes = (cardTypeKeys, layout, row, col, grid) => {
    let availableOptions = [];
    const usedCardTypes = layout.map(item => item.cardType);

    cardTypeKeys.forEach(cardType => {
        if (!usedCardTypes.includes(cardType)) {
            cardTypes[cardType].forEach(size => {
                if (isValidPosition(size, { columnStart: col, rowStart: row }, layout, grid)) {
                    availableOptions.push({ cardType, size });
                }
            });
        }
    });

    return availableOptions;
};


    // Function to update the grid marking the occupied cells
    const updateGrid = (grid, position, size) => {
        for (let row = position.rowStart; row < position.rowStart + size.rows; row++) {
            for (let col = position.columnStart; col < position.columnStart + size.columns; col++) {
                grid[row - 1][col - 1] = true;
            }
        }
    };

    // Updated function to check if the position is valid for the given size
    const isValidPosition = (size, position, currentLayout, grid) => {
        const columnEnd = position.columnStart + size.columns - 1;
        const rowEnd = position.rowStart + size.rows - 1;

        if (columnEnd > gridColumns || rowEnd > gridRows) {
            return false;
        }

        for (let r = position.rowStart; r <= rowEnd; r++) {
            for (let c = position.columnStart; c <= columnEnd; c++) {
                if (grid[r - 1][c - 1]) { // Check if the cell is already occupied
                    return false;
                }
            }
        }

        return true;
    };

    // Function to select a random element from an array
    const selectRandomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };


    // Function to generate layout components based on the random layout
    const generateLayoutComponents = () => {
        let layoutConfigurations = generateRandomLayout();

        return layoutConfigurations.map((config, index) => {
            const cardClasses = `card ${config.size.columns}-columns ${config.size.rows}-rows`;

            return () => (
                <Card
                    key={index} // Add a unique key for each card
                    title={config.cardType.toUpperCase()}
                    className={cardClasses}
                    style={{
                        gridColumn: `span ${config.size.columns}`,
                        gridRow: `span ${config.size.rows}`,
                    }}
                >
                    {/* Render card content based on cardType */}
                    {config.cardType === 'EXPERIENCE' && <ExperienceCard />}
                    {config.cardType === 'EDUCATION' && <EducationCard />}
                    {config.cardType === 'TIMEZONE' && <AnalogClock />}
                    {config.cardType === 'PROJECTS' && <ProjectCard />}
                    {config.cardType === 'STATUS' && <StatusCard />}
                    {config.cardType === 'MY WORK(S)' && <PortfolioCard />}
                    {config.cardType === 'CONNECT' && <ContactCard />}
                    
                </Card>
            );
        });
    };

    const layouts = generateLayoutComponents();

    export default layouts;
