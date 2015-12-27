/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cinema.services;

import javax.persistence.EntityManager;
import cinema.entities.Seatmap;
import java.net.URI;
import java.util.List;
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
@Path("cinema.entities.seatmap")
@com.sun.jersey.spi.resource.Singleton
@com.sun.jersey.api.spring.Autowire
public class SeatmapRESTFacade {
    @PersistenceContext(unitName = "CinemaWebAppPU")
    protected EntityManager entityManager;

    public SeatmapRESTFacade() {
    }

    @POST
    @Consumes({"application/xml", "application/json"})
    @Transactional
    public Response create(Seatmap entity) {
        entityManager.persist(entity);
        entityManager.flush();
        return Response.created(URI.create(entity.getId().toString())).build();
    }

    @PUT
    @Consumes({"application/xml", "application/json"})
    @Transactional
    public void edit(Seatmap entity) {
        entityManager.merge(entity);
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void remove(@PathParam("id") Integer id) {
        Seatmap entity = entityManager.getReference(Seatmap.class, id);
        entityManager.remove(entity);
    }

    @GET
    @Path("{id_map}/{id}")
    @Produces({"application/xml", "application/json"})
    @Transactional
    public Seatmap find(@PathParam("id_map") Integer idMap, @PathParam("id") Integer id) {
        return find(id);
    }

    @GET
    @Path("{id_map}")
    @Produces({"application/xml", "application/json"})
    @Transactional
    public List<Seatmap> findAll(@PathParam("id_map") Integer id) {
        return find(true, -1, -1, id.intValue());
    }

    @GET
    @Path("{id_map}/{max}/{first}")
    @Produces({"application/xml", "application/json"})
    @Transactional
    public List<Seatmap> findRange(@PathParam("max") Integer max, @PathParam("first") Integer first, @PathParam("id_map") Integer id) {
        return find(false, max, first, id.intValue());
    }

    @GET
    @Path("{id_map}/count")
    @Produces("text/plain")
    @Transactional
    public String count(@PathParam("id_map") Integer id) {
        try {
            Query query = entityManager.createQuery("SELECT count(o) FROM Seatmap AS o WHERE o.idMap="+id);
            return query.getSingleResult().toString();
        } finally {
            entityManager.close();
        }
    }

    private List<Seatmap> find(boolean all, int maxResults, int firstResult, int idMap) {
        try {
            Query query = entityManager.createQuery("SELECT object(o) FROM Seatmap AS o WHERE o.idMap="+idMap);
            if (!all) {
                query.setMaxResults(maxResults);
                query.setFirstResult(firstResult);
            }
            return query.getResultList();
        } finally {
            entityManager.close();
        }
    }
    
    private Seatmap find(Integer id) {
        return entityManager.find(Seatmap.class, id);
    }
}
