function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

function inlineMarkdown(value: string): string {
	let html = escapeHtml(value);
	html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
	html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
	html = html.replace(
		/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
		'<a href="$2" rel="noreferrer">$1</a>'
	);
	return html;
}

export function renderMarkdown(markdown: string): string {
	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	const output: string[] = [];
	let paragraph: string[] = [];
	let list: string[] = [];
	let inCode = false;
	let codeLanguage = '';
	let codeLines: string[] = [];

	const flushParagraph = () => {
		if (paragraph.length) {
			output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
			paragraph = [];
		}
	};

	const flushList = () => {
		if (list.length) {
			output.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
			list = [];
		}
	};

	for (const line of lines) {
		if (line.startsWith('```')) {
			if (inCode) {
				output.push(
					`<pre><code class="language-${escapeHtml(codeLanguage)}">${escapeHtml(codeLines.join('\n'))}</code></pre>`
				);
				inCode = false;
				codeLanguage = '';
				codeLines = [];
			} else {
				flushParagraph();
				flushList();
				inCode = true;
				codeLanguage = line.slice(3).trim();
			}
			continue;
		}

		if (inCode) {
			codeLines.push(line);
			continue;
		}

		if (!line.trim()) {
			flushParagraph();
			flushList();
			continue;
		}

		const heading = line.match(/^(#{1,3})\s+(.+)$/);
		if (heading) {
			flushParagraph();
			flushList();
			const level = heading[1].length;
			output.push(`<h${level + 1}>${inlineMarkdown(heading[2])}</h${level + 1}>`);
			continue;
		}

		const bullet = line.match(/^[-*]\s+(.+)$/);
		if (bullet) {
			flushParagraph();
			list.push(bullet[1]);
			continue;
		}

		if (line.startsWith('> ')) {
			flushParagraph();
			flushList();
			output.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
			continue;
		}

		flushList();
		paragraph.push(line.trim());
	}

	if (inCode) {
		output.push(
			`<pre><code class="language-${escapeHtml(codeLanguage)}">${escapeHtml(codeLines.join('\n'))}</code></pre>`
		);
	}
	flushParagraph();
	flushList();

	return output.join('\n');
}
