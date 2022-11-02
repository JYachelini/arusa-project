import { Container } from '@mui/material'
import { IArticle } from '../../../interfaces/article.interface'
import ArticlesPresentation from './ArticlesPresentation'
import ArticleView from './ArticleView'

import Images from './importImages'
function Articles() {
	const [Article1, Article2, Article3, Presentation] = Images
	const articlesPresentation = {
		title: 'Manhattan Pià-terre for a new Chicago apartment',
		description:
			'Interior designer Sarah Vaile remembers eyeing a New York City apartment—one with bold colors and a personality as distinct as its chic owner—in a 2014 issue of House Beautiful, and tucking it away for future design inspiration. Years later, in a serendipitous turn of events, the woman she’d seen in the magazine—a stylish figure now in her 30s—just moved to Chicago.',
		imageUrl: Presentation,
	}

	const articles: IArticle[] = [
		{
			id: 1,
			title: "Inside a playful, bohemian beach house on Martha's Vineyard",
			description:
				'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
			imageUrl: Article1,
		},
		{
			id: 2,
			title: 'Modern Texas home is beautiful and completely kid-friendly',
			description:
				'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
			imageUrl: Article2,
		},
		{
			id: 3,
			title: "Tudor-style home in Chicago's North Shore is chock-full",
			description:
				'I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.',
			imageUrl: Article3,
		},
	]

	return (
		<Container disableGutters>
			<ArticlesPresentation {...articlesPresentation} />
			<Container
				disableGutters
				sx={{
					display: 'flex',
					flexDirection: { mobile: 'column', laptop: 'row' },
					borderBottom: '1px solid',
					borderColor: 'oyster.main',
				}}
			>
				{articles.map((article) => {
					return <ArticleView {...article} key={article.id} />
				})}
			</Container>
		</Container>
	)
}

export default Articles
