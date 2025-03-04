import {
  GetIsInMemoryClusterModeEnabled,
  GetIsRequestRateLimitingEnabled,
} from './index';

describe('Get System Critical Flag', () => {
  describe('SystemCriticalFlagEnum.IS_IN_MEMORY_CLUSTER_MODE_ENABLED', () => {
    it('should return default hardcoded value when no environment variable is set', async () => {
      // TODO: Temporary coexistence to replace env variable name
      process.env.IS_IN_MEMORY_CLUSTER_MODE_ENABLED = '';
      process.env.IN_MEMORY_CLUSTER_MODE_ENABLED = '';

      const getIsInMemoryClusterModeEnabled =
        new GetIsInMemoryClusterModeEnabled();

      const result = getIsInMemoryClusterModeEnabled.execute();
      expect(result).toEqual(false);
    });

    it('should return old environment variable value when no new environment variable is set', async () => {
      // TODO: Temporary coexistence to replace env variable name
      process.env.IS_IN_MEMORY_CLUSTER_MODE_ENABLED = '';
      process.env.IN_MEMORY_CLUSTER_MODE_ENABLED = 'true';

      const getIsInMemoryClusterModeEnabled =
        new GetIsInMemoryClusterModeEnabled();

      const result = getIsInMemoryClusterModeEnabled.execute();
      expect(result).toEqual(true);
    });

    it('should return new environment variable value when is set', async () => {
      // TODO: Temporary coexistence to replace env variable name
      process.env.IS_IN_MEMORY_CLUSTER_MODE_ENABLED = 'true';
      process.env.IN_MEMORY_CLUSTER_MODE_ENABLED = 'false';

      const getIsInMemoryClusterModeEnabled =
        new GetIsInMemoryClusterModeEnabled();

      const result = getIsInMemoryClusterModeEnabled.execute();
      expect(result).toEqual(true);
    });
  });

  describe('SystemCriticalFlagEnum.IS_REQUEST_RATE_LIMITING_ENABLED', () => {
    it('should return default hardcoded value when no environment variable is set', async () => {
      process.env.IS_REQUEST_RATE_LIMITING_ENABLED = '';

      const getIsRequestRateLimitingEnabled =
        new GetIsRequestRateLimitingEnabled();

      const result = getIsRequestRateLimitingEnabled.execute();
      expect(result).toEqual(false);
    });

    it('should return environment variable value when environment variable is set', async () => {
      process.env.IS_REQUEST_RATE_LIMITING_ENABLED = 'true';

      const getIsRequestRateLimitingEnabled =
        new GetIsRequestRateLimitingEnabled();

      const result = getIsRequestRateLimitingEnabled.execute();
      expect(result).toEqual(true);
    });
  });
});
