using SportEventApp.Data.Models;
using SportEventApp.Business.DTOModels;

namespace SportEventApp.Business.Mapping
{
    public class SportMapper
    {
        public SportDTO MapToDTO(Sport source)
        {
            SportDTO target = new SportDTO();
            target.Id = source.Id;
            target.Name = source.Name;
            return target;
        }

        public Sport MapFromDTO(SportDTO source)
        {
            Sport target = new Sport();
            target.Id = source.Id;
            target.Name = source.Name;
            return target;
        }
    }
}
