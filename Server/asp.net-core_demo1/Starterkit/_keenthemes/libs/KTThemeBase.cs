namespace Starterkit._keenthemes.libs;

// Base type class for theme settings
class KTThemeBase
{
    public string LayoutDir { get; set; }

    public string Direction { get; set; }

    public bool ModeSwitchEnabled { get; set; }

    public string ModeDefault { get; set; }

    public string AssetsDir { get; set; }

    public KTThemeAssets Assets { get; set; }

    public SortedDictionary<string, SortedDictionary<string, string[]>> Vendors { get; set; }
}
