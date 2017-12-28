package sample.flyway;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sample.flyway.Person;
import sample.flyway.PersonRepository;

@RestController
@RequestMapping("api/v1/")
public class PersonController {
	
	@Autowired
	private PersonRepository personRepository;

	@RequestMapping(value = "persons", method = RequestMethod.GET)
	public List<Person> list() {
		return personRepository.findAll();
	}

	@RequestMapping(value = "persons", method = RequestMethod.POST)
	public Person create(@RequestBody Person person) {
		return personRepository.saveAndFlush(person);
	}

	@RequestMapping(value = "persons/{id}", method = RequestMethod.GET)
	public Person get(@PathVariable Long id) {
		return personRepository.findOne(id);
	}

	@RequestMapping(value = "persons/{id}", method = RequestMethod.PUT)
	public Person update(@PathVariable Long id, @RequestBody Person person) {
		Person existingPerson = personRepository.findOne(id);
		BeanUtils.copyProperties(person, existingPerson);
		return personRepository.saveAndFlush(existingPerson);
	}

	@RequestMapping(value = "persons/{id}", method = RequestMethod.DELETE)
	public Person delete(@PathVariable Long id) {
		Person existingPerson = personRepository.findOne(id);
		personRepository.delete(existingPerson);
		return existingPerson;
	}
	
}
