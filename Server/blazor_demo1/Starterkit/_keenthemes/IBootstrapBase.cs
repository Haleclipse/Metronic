using Starterkit._keenthemes.libs;

namespace Starterkit._keenthemes;

public interface IBootstrapBase
{
    void initThemeMode();
    
    void initThemeDirection();
    
    void initRtl();

    void initLayout();

    void init(IKTTheme theme);
}