
export type ServiceCard = {
    id: number;
    title: string;
    description: string;
};
export type ServicesCards = {
    cards: ServiceCard[];
}

export type PortfolioCard = {
    id: number;
    image: string;
    description: string;
};
export type PortfolioCards = {
    cards: PortfolioCard[];
}