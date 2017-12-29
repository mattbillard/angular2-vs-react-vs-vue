package sample.flyway;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sample.flyway.Article;
import sample.flyway.ArticleRepository;

@RestController
@RequestMapping("api/")
public class ArticleController {
	
	@Autowired
	private ArticleRepository personRepository;

	@RequestMapping(value = "articles", method = RequestMethod.GET)
	public List<Article> list() {
		return personRepository.findAll();
	}

	@RequestMapping(value = "articles", method = RequestMethod.POST)
	public Article create(@RequestBody Article person) {
		return personRepository.saveAndFlush(person);
	}

	@RequestMapping(value = "articles/{id}", method = RequestMethod.GET)
	public Article get(@PathVariable Long id) {
		return personRepository.findOne(id);
	}

	@RequestMapping(value = "articles/{id}", method = RequestMethod.PUT)
	public Article update(@PathVariable Long id, @RequestBody Article person) {
		Article existingPerson = personRepository.findOne(id);
		BeanUtils.copyProperties(person, existingPerson);
		return personRepository.saveAndFlush(existingPerson);
	}

	@RequestMapping(value = "articles/{id}", method = RequestMethod.DELETE)
	public Article delete(@PathVariable Long id) {
		Article existingPerson = personRepository.findOne(id);
		personRepository.delete(existingPerson);
		return existingPerson;
	}
	
}
