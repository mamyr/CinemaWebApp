/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cinema.services;

import javax.persistence.EntityManager;
import cinema.entities.Map;
import java.net.URI;
import java.util.List;
import javax.naming.NamingException;
import javax.persistence.Query;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ZhanatK
 */
@Path("cinema.entities.map")
@com.sun.jersey.spi.resource.Singleton
@com.sun.jersey.api.spring.Autowire
public class MapRESTFacade extends AbstractFacade<Map> {
    //@PersistenceUnit(unitName = "CinemaWebAppPU")
    protected EntityManager entityManager;

    public MapRESTFacade() {
        super(Map.class);
    }

    @POST
    @Consumes({"application/xml", "application/json"})
    @Transactional
    public Response create(Map entity) {
        entityManager = getEntityManager();
        entityManager.getTransaction().begin();
        Map m = new Map();
        m.setLength(entity.getLength());
        m.setWidth(entity.getWidth());
        m.setName(entity.getName());
        entityManager.persist(m);
        entityManager.getTransaction().commit();
        entityManager.close();
        
        return Response.created(URI.create(entity.getId().toString())).build();
    }

    @PUT
    @Consumes({"application/xml", "application/json"})
    @Transactional
    public void edit(Map entity) {
        entityManager = getEntityManager();
        entityManager.getTransaction().begin();
        entityManager.merge(entity);
        entityManager.getTransaction().commit();
        entityManager.close();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void remove(@PathParam("id") Integer id) {
        entityManager = getEntityManager();
        entityManager.getTransaction().begin();
        Map entity = entityManager.getReference(Map.class, id);
        entityManager.remove(entity);
        entityManager.getTransaction().commit();
        entityManager.close();
    }

    @GET
    @Path("{id}")
    @Produces({"application/xml", "application/json"})
    @Transactional
    public Map find(@PathParam("id") Integer id) {
        entityManager = getEntityManager();
        return entityManager.find(Map.class, id);
    }

    @GET
    @Produces({"application/xml", "application/json"})
    @Transactional
    public List<Map> findAll() {
        return find(true, -1, -1);
    }

    @GET
    @Path("{max}/{first}")
    @Produces({"application/xml", "application/json"})
    @Transactional
    public List<Map> findRange(@PathParam("max") Integer max, @PathParam("first") Integer first) {
        return find(false, max, first);
    }

    @GET
    @Path("count")
    @Produces("text/plain")
    @Transactional
    public String count() {
        try {
            entityManager = getEntityManager();
            Query query = entityManager.createQuery("SELECT count(o) FROM Map AS o");
            return query.getSingleResult().toString();
        } finally {
            entityManager.close();
        }
    }

    private List<Map> find(boolean all, int maxResults, int firstResult) {
        try {
            entityManager = getEntityManager();
            Query query = entityManager.createQuery("SELECT object(o) FROM Map AS o");
            if (!all) {
                query.setMaxResults(maxResults);
                query.setFirstResult(firstResult);
            }
            return query.getResultList();
        } 
        finally {
            entityManager.close();
        }
    }

}
