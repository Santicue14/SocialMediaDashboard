import GitLogo from '../assets/images/icon-github.svg';

export const Footer = () => {
    return (
        <footer className="bottom-0 w-full">
            <div className="container mx-auto py-4 text-center">
                <p className="text-Dark-Grayish-Blue font-bold">
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        className="text-Very-Dark-Blue dark:text-Desaturated-Blue"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <span className="text-Very-Dark-Blue dark:text-Desaturated-Blue">
                        Santicue14.
                    </span>
                    <a
                        href="https://github.com/Santicue14"
                        className="text-Very-Dark-Blue dark:text-Desaturated-Blue flex items-center justify-center"
                        target="_blank"
                    >
                        <img src={GitLogo} alt="GitHub Logo" className="block ml-1" />
                    </a>
                </p>
            </div>
        </footer>
    );
};
