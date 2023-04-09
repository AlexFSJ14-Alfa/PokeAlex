import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={40} speed={0.4} color='black' />;
        </div>
    )
};
