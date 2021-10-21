package ftn.uns.ac.rs.ppmtool.service;

import ftn.uns.ac.rs.ppmtool.entity.Project;
import ftn.uns.ac.rs.ppmtool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public Project createOrUpdate(Project project) {



        return projectRepository.save(project);
    }
}
